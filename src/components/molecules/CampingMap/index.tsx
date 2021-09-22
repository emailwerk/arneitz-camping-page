import LightBox from '../../LightBox'
import {fields} from '@snek-at/jaen-pages'

const CampingMap = () => {
  return (
    <LightBox
      previewImage={
        <fields.ImageField
          fieldName="campingmap-lightbox"
          initValue={{
            src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
            alt: 'lightboximage'
          }}
          className="campingmapPreview"
        />
      }>
      <fields.ImageField
        fieldName="campingmap-lightbox"
        initValue={{
          src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
          alt: 'lightboximage'
        }}
        className="campingMap"
        style={{width: '100%'}}
      />
    </LightBox>
  )
}

export default CampingMap
