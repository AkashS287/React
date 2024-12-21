import List from "./List"
const fruits = [{id: 1, name:"Apple", cal : 95},
    {id: 2, name:"Mango", cal : 117},
    {id: 3, name:"Orange", cal : 52},
    {id: 4, name:"Pineapple", cal : 78},
    {id: 5, name:"Raw Mango", cal : 45}
];
const Vegetables = [{id: 1, name:"Potato", cal : 45},
                    {id: 2, name:"Beans", cal : 198},
                    {id: 3, name:"Onion", cal : 54},
                    {id: 4, name:"Ladysfinger", cal : 108},
                    {id: 5, name:"Beetroot", cal : 54}
];
const iceCream = [{id: 1, name:"Vannila", cal : 45},
    {id: 2, name:"Pista", cal : 198},
    {id: 3, name:"Mango", cal : 54},
    {id: 4, name:"ButterScotch", cal : 108},
    {id: 5, name:"ChocoBar", cal : 54}
];
const Lapp = () => {
  return (
    <div>
       <List items={fruits} category="Fruits"/>
       <List items={Vegetables} category="Vegetables"/>
       <List items={iceCream} category="IceCream"/>
       <List items={iceCream} category="IceCream"/>
    </div>
  )
}

export default Lapp
