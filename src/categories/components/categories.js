import React from 'react';
import Category from './category';
import './categories.css'
import Search from '../../widgets/containers/search'
import Media from '../../playlist/components/media'


function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.search.map(item => {
          return <Media openModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')} />
        })
      }
      {
        props.categories.map(item => {
          return (
            <Category {...item.toJS()} key={item.get('id')} handleOpenModal={props.handleOpenModal} />
          )
        })
      }
    </div>
  )
}

export default Categories
