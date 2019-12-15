import React, { useState } from "react"
import Select from 'react-select';
import { useTranslation } from 'react-i18next';


const TranslateComponentItem = (props) => {

  const { t, i18n } = useTranslation();

  const options = [
    { value: 'es', label: `${t('spanish')}` },
    { value: 'en', label: `${t('english')}` }
  ];
  
  const optionsMobile = [
    { value: 'es', label: 'ES' },
    { value: 'en', label: 'ING' }
  ];

  const [selectedLang, setSelectedLang] = useState(options[0].value);

  const colourStyles = {
    control: styles => ({ ...styles, borderStyle: 'none', borderColor: 'white', boxShadow: 'white' }),
    indicatorSeparator: styles => ({ ...styles, background: 'white' }),
    singleValue: (styles, { data }) => ({ ...styles, textOverflow: 'clip', marginLeft: '0', marginRight: '0' , color: "#575757", fontSize: "20px",
    fontWeight: "500"}),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      const color = "#FF7F00";
      const lightColor = 'white';
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
            ? color
            : isFocused
              ? lightColor
              : null,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          color: "white",
          backgroundColor: !isDisabled && (isSelected ? color : lightColor),
        },
      };
    }
  };

  function handleChange(selectedOption) {
    i18n.changeLanguage(selectedOption.value)
    setSelectedLang(selectedOption.value);
  };
  
  function getCurrentLabel() {
    if (props.mobile) {
      return selectedLang === 'en' ? 'ING' : 'ES';
    } else {
      const mLabelKey = selectedLang === 'en' ? 'english' : 'spanish';
      return t(mLabelKey)
    }
  }

  return (
    <Select
      value={{ value: selectedLang, label: getCurrentLabel() }}
      onChange={handleChange}
      options={props.mobile ? optionsMobile : options}
      styles={colourStyles}
    />
  );
}

export default TranslateComponentItem