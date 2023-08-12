

const PriceFormat = ({price}) => {
  return Intl.NumberFormat('ja-JP',{
   style: "currency",
   currency:'JPY',
   maximumFractionDigits:2 ,
  }).format(price / 100);
}

export default PriceFormat