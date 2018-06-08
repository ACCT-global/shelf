import PropTypes from 'prop-types'

export const shelfItemPropTypes = {
  item: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        itemId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        referenceId: PropTypes.arrayOf(
          PropTypes.shape({
            Value: PropTypes.string.isRequired,
          })
        ),
        images: PropTypes.arrayOf(
          PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            imageTag: PropTypes.string.isRequired,
          })
        ).isRequired,
        sellers: PropTypes.arrayOf(
          PropTypes.shape({
            commertialOffer: PropTypes.shape({
              /** SKU installments */
              Installments: PropTypes.arrayOf(
                PropTypes.shape({
                  /** Installment value */
                  Value: PropTypes.number.isRequired,
                  /** Interest rate (zero if interest-free) */
                  InterestRate: PropTypes.number.isRequired,
                  /** Calculated total value */
                  TotalValuePlusInterestRate: PropTypes.number,
                  /** Number of installments */
                  NumberOfInstallments: PropTypes.number.isRequired,
                  /** Installments offer name */
                  Name: PropTypes.string,
                })
              ),
              Price: PropTypes.number.isRequired,
              ListPrice: PropTypes.number.isRequired,
            }).isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }),
  extensionId: PropTypes.string.isRequired,
  summary: PropTypes.any,
}