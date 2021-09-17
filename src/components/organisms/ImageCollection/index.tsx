import {Center, Wrap, WrapItem} from '@chakra-ui/layout'
import {fields} from '@snek-at/jaen-pages'
import LightBox from '../../LightBox'
import * as style from './style'

const ImageCollection = () => {
  // BlockContainer
  // ImageCollectionBlock

  // children inside of Wrap

  return (
    <style.ImageCollectionStyle>
      <Wrap
        justify="center"
        maxW={[
          '300px',
          '300px',
          '900px',
          '1200px',
          '1200px',
          '1200px',
          '1200px',
          '2100px'
        ]}
        spacing="0"
        mb="20">
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox1"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox1"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox2"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox2"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox3"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox3"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox4"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox4"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox5"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox5"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox6"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox6"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox7"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox7"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox8"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox8"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
        <LightBox
          previewImage={
            <fields.ImageField
              fieldName="apartmentlightbox9"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lightboximage'
              }}
              className="lightboxPreviewImage"
            />
          }>
          <fields.ImageField
            fieldName="apartmentlightbox9"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'lightboximage'
            }}
            className="lightboxImage"
          />
        </LightBox>
      </Wrap>
    </style.ImageCollectionStyle>
  )
}

export default ImageCollection
