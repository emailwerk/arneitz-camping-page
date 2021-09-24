import {usePages} from '@snek-at/jaen-pages/src/contexts/cms'

const fetchData = () => {
  const removePTags = (string: string) => {
    return string.substring(3, string.length - 4)
  }

  const fields = usePages()?.nodes?.['SitePage /']?.fields
  const data = {
    autumnseason: {},
    bikeshow: {},
    mainseason: {},
    springseason: {}
  }
  const seasons = ['autumnseason', 'bikeshow', 'mainseason', 'springseason']
  for (const season of seasons) {
    let object = {
      start: removePTags(
        fields?.[`pricelist-${season}-start`]?.content?.text ||
          '<p>StartDate</p>'
      ),
      end: removePTags(
        fields?.[`pricelist-${season}-end`]?.content?.text || '<p>EndDate</p>'
      ),
      prices: {}
    }
    const reducedSeasons =
      season === 'springseason' || season === 'autumnseason'
        ? 'lowseason'
        : season

    object.prices = {
      adult: removePTags(
        reducedSeasons === 'bikeshow'
          ? fields?.['pricelist-bikeshow-person-adult']?.content?.text ||
              '<p>priceAdult</p>'
          : fields?.[`pricelist-${reducedSeasons}-adult`]?.content?.text ||
              '<p>priceAdult</p>'
      ),
      over3: removePTags(
        reducedSeasons === 'bikeshow'
          ? fields?.['pricelist-bikeshow-person-child']?.content?.text ||
              '<p>priceAdult</p>'
          : fields?.[`pricelist-${reducedSeasons}-over3`]?.content?.text ||
              '<p>priceOver3</p>'
      ),
      under3: removePTags(
        fields?.[`pricelist-${reducedSeasons}-under3`]?.content?.text ||
          '<p>priceUnder3</p>'
      ),
      car: removePTags(
        reducedSeasons === 'bikeshow'
          ? fields?.['pricelist-bikeshow-car-parking']?.content?.text ||
              '<p>priceAdult</p>'
          : fields?.[`pricelist-${reducedSeasons}-car`]?.content?.text ||
              '<p>priceCar</p>'
      ),
      dog: removePTags(
        (season === 'bikeshow'
          ? fields?.['pricelist-mainseason-dog']?.content?.text
          : fields?.[`pricelist-${reducedSeasons}-dog`]?.content?.text) ||
          '<p>priceDog</p>'
      ),
      parking:
        reducedSeasons === 'bikeshow'
          ? {
              camper: removePTags(
                fields?.['pricelist-bikeshow-camper-parking']?.content?.text ||
                  '<p>priceParking</p>'
              ),
              xxl: removePTags(
                fields?.['pricelist-bikeshow-xxl-parking']?.content?.text ||
                  '<p>priceParking</p>'
              )
            }
          : reducedSeasons === 'mainseason'
          ? removePTags(
              fields?.['pricelist-mainseason-parking']?.content?.text ||
                '<p>priceParking</p>'
            )
          : {
              orange: removePTags(
                fields?.[`pricelist-lowseason-orange-parking`]?.content?.text ||
                  '<p>priceParking</p>'
              ),
              turquoise: removePTags(
                fields?.['pricelist-lowseason-blue-parking']?.content?.text ||
                  '<p>priceParkin</p>'
              )
            },
      minPrice: {
        orange: removePTags(
          fields?.[`pricelist-${reducedSeasons}-orange`]?.content?.text ||
            '<p>minPrice</p>'
        ),
        turquoise: removePTags(
          fields?.[`pricelist-${reducedSeasons}-türkis`]?.content?.text ||
            '<p>minPrice</p>'
        )
      }
    }
    data[season] = object
  }

  return data
}

export default fetchData
