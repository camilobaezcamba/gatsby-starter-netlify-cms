import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import { IntlProvider } from 'react-intl'


const customIndex = ()=> 
     (
        <IntlProvider locale={'en'} messages={{'title': 'Test title'}} defaultLocale="en">
            <IndexPagePreview/>
        </IntlProvider>
    )


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', customIndex)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('english_posts', BlogPostPreview)
CMS.registerPreviewTemplate('spanish_posts', BlogPostPreview)
