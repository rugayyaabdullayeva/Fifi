import React from 'react'

const Card = (props) => {
    console.log(props.title);
    return (
        <div className ='card'>
            <div className='card-img'>
                <img src={props.bgimg} alt="" />
            </div>
            <div className='card-body'>
                <span>News</span>
                <h3 style={{backgroundColor:props.titleColor}}>{props.title}</h3>
                <p style={{color:props.titleColor}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum pariatur ipsa eos cumque neque magnam dolores modi recusandae nobis voluptate natus commodi id amet reprehenderit tempore deserunt, aspernatur aut!

                </p>
            </div>
        </div>
    )
}

export default Card