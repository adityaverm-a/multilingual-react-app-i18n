import React, { useEffect } from "react"
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import cn from 'classnames'

const languages = [
  {
    code: 'hi',
    name: 'हिन्दी',
  },
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ja',
    name: '日本',
  },
]

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page title')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <>
      <section className="text-gray-600 body-font bg-indigo-100 h-screen">
        <div className="container mx-auto flex px-1 md:px-5 py-16 md:flex-row flex-col-reverse justify-center items-center">
            <div className="w-72 md:w-[600px] flex flex-col my-16 md:mb-0 px-0 md:px-7 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{t('welcome_message')}
                  <br className="inline-block" />{t('welcome_message2')}
              </h1>
              <p className="mb-8 leading-relaxed">{t('description')}</p>
              <div className="flex justify-evenly w-full space-x-4">
                  {languages.map(({ code, name }) => (
                    <a 
                      href="#"
                      onClick={() => {
                        i18next.changeLanguage(code)
                      }}
                      className={cn('inline-flex text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg', currentLanguageCode === code ? 'bg-blue-600' : 'bg-blue-400')}
                    >
                      {name}
                    </a>
                  ))}
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
