import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../../utils/context'

const CatalogRow = () => {
    const {i, i18n} = useTranslation()

    const {products} = useContext(CustomContext)
  return (
    <div className='catalog__row'>

     <div className='catalog__card'>
     <img className='catalog__catd-img' src="" alt=""/>
            <h3 className='catalog__card-title'>george gina lucy</h3>
            <p className='catalog__card-category'>Shoes</p>
            <p className='catalog__card-brand'>nike</p>
            <p className='catalog__card-price'>
                3743 {i18n.language === 'ru' ? 'руб.' : '$'}
            </p>
     </div>
    </div>
  )
}

export default CatalogRow;