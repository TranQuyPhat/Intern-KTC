import React from 'react'
import style from '../css/card2.module.css'

type Props = {
  image?: string
  title: string
  price: number
  originalPrice?: number
  discountPercent?: number
}

const Card2 = (props: Props) => {
  const { image, title, price, originalPrice, discountPercent } = props

  // Tính giá nếu có discount
  const finalPrice =
    discountPercent && originalPrice
      ? Math.round(originalPrice * (1 - discountPercent / 100))
      : price

  return (
    <div className={style.card2}>
      {/* Badge giảm giá */}
      {discountPercent && (
        <div className={style.discountBadge}>-{discountPercent}%</div>
      )}

      <img src={image} alt={title} className={style.img} />
      <div>
        <h3 className={style.h3}>{title}</h3>
        <div>
          {originalPrice ? (
            <>
              <span className={style.originalPrice}>
                {originalPrice.toLocaleString('vi-VN')} đ
              </span>
              <span className={style.price}>
                {finalPrice.toLocaleString('vi-VN')} đ
              </span>
            </>
          ) : (
            <span className={style.price}>
              {finalPrice.toLocaleString('vi-VN')} đ
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card2
