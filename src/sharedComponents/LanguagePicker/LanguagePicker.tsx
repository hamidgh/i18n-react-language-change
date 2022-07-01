import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import {DropdownButton, Dropdown} from "react-bootstrap";
import './styles/languagePicker.scss';

const LanguagePicker = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const flag = language === 'fa' ? '🇮🇷' : '🇺🇸';

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }

  return (
    <div  className="language-picker">
      <DropdownButton title={flag} className="language-picker--dropdown" variant="light">
        <Dropdown.Item onClick={() => handleLanguageChange('fa')} > 🇮🇷 : فارسی</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('en')} > 🇺🇸 : English </Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default LanguagePicker;