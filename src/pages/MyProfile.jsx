import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userdata, setuserdata] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "57th Cross , richmond",
      line2: "Circle , Church Road , London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isedit, setisedit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm' >
      <img className='w-36 rounded' src={userdata.image} alt="" />

      {
        isedit
          ?
          <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userdata.name} onChange={e => setuserdata(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='text-3xl font-medium text-neutral-800 mt-4' >{userdata.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      {/*  contact info */}

      <div>
        <p className='text-neutral-500 underline mt-3' >CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700' >
          <p className='font-medium' > Email id:</p>
          <p className='text-blue-500' >{userdata.email}</p>
          <p className='font-medium' >Phone:</p>
          {
            isedit
              ?
              <input className='br-gray-100 max-w-52' type="text" value={userdata.phone} onChange={e => setuserdata(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400' >{userdata.phone}</p>
          }
          <p className='font-medium' >Address:</p>
          {
            isedit
              ? <p>
                <input className='bg-gray-50'
                  onChange={e => setuserdata(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                  value={userdata.address.line1} type="text" />
                <br />
                <input className='bg-gray-50'
                  onChange={e => setuserdata(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                  value={userdata.address.line2} type="text" />
              </p>
              :
              <p className='text-gray-500' >
                {userdata.address.line1}
                <br />
                {userdata.address.line2}
              </p>
          }


        </div>
      </div>


      {/*  basic info */}
      <div>
        <p className='text-neutral-500 underline mt-3' >BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium ' >Gender:</p>
          {
            isedit
              ?
              <select className='max-w-20 br-gray-100' onChange={(e) => setuserdata(prev => ({ ...prev, gender: e.target.value }))} value={userdata.gender} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400' >{userdata.gender}</p>
          }
          <p className='font-medium '>Birthday:</p>
          {
            isedit ? <input type='date' className='max-w-28 br-gray-100'
              onChange={(e) => setuserdata(prev => ({ ...prev, dob: e.target.value }))} value={userdata.dob} />
              : <p className='text-gray-400'>{userdata.dob}</p>
          }

        </div>
      </div>


      {/* buttons  */}
      <div className='mt-10 ' >
        {
          isedit
            ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white translation-all' onClick={() => setisedit(false)}>Save Information
            </button>
            : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white translation-all' onClick={() => setisedit(true)}>Edit</button>
        }

      </div>

    </div>
  )
}

export default MyProfile