import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/home.scss';
import LanguagePicker from "../sharedComponents/LanguagePicker/LanguagePicker";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div  className="home-page">
      <LanguagePicker />
      <h1 className="home-page--title">{t('HOME_PAGE.TITLE')}</h1>
      <div className="home-page--description">{t('HOME_PAGE.DESCRIPTION.PART2')}</div>
    </div>
  )
}

export default HomePage;

