/** @format */

const express = require('express')
const router = express.Router()
const fs = require('fs').promises
const { exec } = require('child_process')
const path = require('path')
const os = require('os')

router.post('/convert-to-docx', async (req, res) => {
  const { content } = req.body
  if (!content) {
    return res.status(400).json({ error: '没有找到可导出的内容' })
  }

  try {
    // Create temp directory for conversion
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'markdown-'))
    const mdFile = path.join(tempDir, 'input.md')
    const docxFile = path.join(tempDir, 'output.docx')

    // Write markdown content to temp file
    await fs.writeFile(mdFile, content, 'utf8')

    // Convert to DOCX using pandoc
    await new Promise((resolve, reject) => {
      exec(`pandoc -f markdown -t docx "${mdFile}" -o "${docxFile}"`, (error) => {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
    })

    // Read the generated DOCX file
    const docxContent = await fs.readFile(docxFile)

    // Clean up temp files
    await fs.rm(tempDir, { recursive: true })

    // Send the DOCX file
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    )
    res.setHeader('Content-Disposition', 'attachment; filename="document.docx"')
    res.send(docxContent)
  } catch (error) {
    console.error('Conversion error:', error)
    res.status(500).json({ error: '转换失败：' + error.message })
  }
})

module.exports = router
