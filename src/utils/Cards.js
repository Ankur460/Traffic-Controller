import React from 'react'

const Cards = () => {
  return (
    <div className='p-3 w-96 '>
    <div className="card w-full bg-red-300 shadow-xl rounded-md">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9M1lVnd9SA7F0bT10zs_OMO3yX37pzT0IHA&usqp=CAU" className='w-full' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cards