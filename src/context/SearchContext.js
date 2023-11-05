import React from 'react'

const CartContext = React.createContext({
  searchInput: '',
  click: false,
  searchPostView: false,
  searchValue: false,
  button: false,
  onChangeLikeIcon: () => {},
  onChangeUnLikeIcon: () => {},
  changeSearchValue: () => {},
  setSearchInput: () => {},
  onMoreOptionsState: () => {},
  searchBox: () => {},
})

export default CartContext
