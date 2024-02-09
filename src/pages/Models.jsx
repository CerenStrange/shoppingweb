import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className='border p-5 m-2 rounded-sm shadow-lg'>
        <img className="w-full h-48 object-cover rounded-t-sm" src="./public/arabamdacia.jpg" width="700px"/>
        <div className='p-4'>
            <h1>ASTRA</h1>
            <p> 
              Peugeot altyapısıyla üretilen modelimiz ilk defa 2022 yılında çıkmıştır. <br />
              L kasa olarak da bilinir.</p>
            <Link className='btn btn-warning btn-lg' to="/models"><img src="./public/Opel-Logo_2017.png" width="30px" />Favoriye Ekle</Link>
        </div>
      </div>

      <div className='border p-5 m-2 rounded-sm shadow-lg'>
        <img className="w-full h-48 object-cover rounded-t-sm" 
        src="./public/corsa.jpg" width="700px"/>
        <div className='p-4'>
            <h1>CORSA</h1>
            <p> 
              Peugeot altyapısıyla üretilen modelimiz ilk defa 2020 yılında çıkmıştır. <br />
              Resimde gördüğünüz 2020 yılından itibaren üretilen F kasa Corsa'nın makyajlanmış 2023 versiyonudur.
            </p>
            <Link className='btn btn-warning btn-lg' to="/models"><img src="./public/Opel-Logo_2017.png" width="30px" />Favoriye Ekle</Link>
        </div>
      </div>

      <div className='border p-5 m-2 rounded-sm shadow-lg'>
        <img className="w-full h-48 object-cover rounded-t-sm"
         src="./public/opel-insignia-2020.jpg" width="700px"/>
        <div className='p-4'>
            <h1>INSIGNIA </h1>
            <p> 
              2009-2022 arasında General Motors altyapısıyla üretilen son modeldir. <br />
              Seni özleyeceğiz Insignia! O7
            </p>
            <Link className='btn btn-warning btn-lg' to="/models"><img src="./public/Opel-Logo_2017.png" width="30px" />Favoriye Ekle</Link>
        </div>
      </div>

      <div className='border p-5 m-2 rounded-sm shadow-lg'>
        <img className="w-full h-48 object-cover rounded-t-sm" 
        src="./public/mokka-b.png" width="700px"/>
        <div className='p-4'>
            <h1>MOKKA</h1>
            <p> 
              Antara'nın ardılı olarak 2012 yılında ortaya çıkmıştır. <br />
              2021'e kadar makyajlı kasayla yoluna devam eden Mokka, 2021'den sonra tamamen değişmiştir
            </p>
            <Link className='btn btn-warning btn-lg' to="/models"><img src="./public/Opel-Logo_2017.png" width="30px" />Favoriye Ekle</Link>
        </div>
      </div>

      <div className='border p-5 m-2 rounded-sm shadow-lg'>
        <img className="w-full h-48 object-cover rounded-t-sm" 
        src="./public/YeniSUVGrandlandv3.png" width="700px"/>
        <div className='p-4'>
            <h1>GRANDLAND</h1>
            <p> 
              Mokka'nın büyük ve aileye hitap eden versiyonu :D
            </p>
            <Link className='btn btn-warning btn-lg' to="/models"><img src="./public/Opel-Logo_2017.png" width="30px" />Favoriye Ekle</Link>
        </div>
      </div>

      <div className='border p-5 m-2 rounded-sm shadow-lg'>
        <img className="w-full h-48 object-cover rounded-t-sm" 
        src="./public/yeni-crossland-2.png" width="700px"/>
        <div className='p-4'>
            <h1>CROSSLAND</h1>
            <p> 
            Mokka'nın büyük ve aileye hitap eden versiyonunun birazcık küçüğü :D
            </p>
            <Link className='btn btn-warning btn-lg' to="/models"><img src="./public/Opel-Logo_2017.png" width="30px" />Favoriye Ekle</Link>
        </div>
      </div>
      
    </>
  )
}

export default About