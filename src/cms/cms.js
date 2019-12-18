import CMS from 'netlify-cms-app'
import withStyled from "./with-styled";

import IndexPagePreview from './preview-templates/IndexPagePreview'
import DriverPagePreview from './preview-templates/DriverPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)

CMS.registerPreviewTemplate('driver', withStyled(DriverPagePreview))
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('english_posts', BlogPostPreview)
CMS.registerPreviewTemplate('spanish_posts', BlogPostPreview)
