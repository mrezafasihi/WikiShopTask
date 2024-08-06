import Calculator from './Instalment/Calculator'
import Slider from './Instalment/Slider'
import View from './Instalment/View'

function Instalment() {
  return (
    <div className='space-y-8'>
        <Slider/>
        <Calculator/>
        <View/>
    </div>
  )
}

export default Instalment