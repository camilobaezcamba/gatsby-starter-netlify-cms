
const IntlProvider = require('react-intl')
const es = require('../../i18n/es')

exports.wrapRootComponent = (Root) => {
  const locale = 'es';
  const Wrapper = () => (
    <IntlProvider locale={locale} messages={es}>
        <Root />
    </IntlProvider>
  )
  return Wrapper;
}
