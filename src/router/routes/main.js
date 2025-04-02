/** @format */

import Frame from '@pages/partials/Frame'
import ExportImage from '@pages/ExportImage'
import ExportPdf from '@pages/ExportPdf'

export default [
  {
    path: '/export',
    component: Frame,
    meta: {
      title: window.$appTitle
    },
    children: [
      {
        path: 'jpeg',
        meta: {
          title: `导出 JPEG | ${window.$appTitle}`
        },
        component: ExportImage
      },
      {
        path: 'png',
        meta: {
          title: `导出 PNG | ${window.$appTitle}`
        },
        component: ExportImage
      },
      {
        path: 'pdf',
        meta: {
          title: `导出 PDF | ${window.$appTitle}`
        },
        component: ExportPdf
      }
    ]
  }
]
