import React from 'react';

function ObjAndArray() {
    //obj
    const obj = [ 
        {
            name: 'sen3',
            age: 21,
            socials:[
                { 
                    facebook:'facebook3.com',
                    zalo:'zalo.me/555555',
                    viber: 'cusenbonchen5'
                },
                { 
                    facebook:'facebook4.com',
                    zalo:'zalo.me/555555',
                    viber: 'cusenbonchen5'
                },
                { 
                    facebook:'facebook5.com',
                    zalo:'zalo.me/555555',
                    viber: 'cusenbonchen5'
                }
            ]  
        },
        {
            name: 'sen4',
            age: 22,
            socials:[
                { 
                    facebook:'facebooksen4.com',
                    zalo:'zalo.me/13211',
                    viber: 'cusenbonchen21'
                },
                { 
                    facebook:'facebooksen5.com',
                    zalo:'zalo.me/13211',
                    viber: 'cusenbonchen21'
                },
                { 
                    facebook:'facebooksen6.com',
                    zalo:'zalo.me/13211',
                    viber: 'cusenbonchen21'
                }
            ] 
        },
    ]
    const array = ['Một con heo','một con trâu','con bò','con ngựa','con cú','con cừu']
    return (
        <> 
            <h1>Obj</h1>
            {
                obj.map((data, index) => 
                    <div key={index}> 
                        <h3>Tên: {data.name}</h3>
                        <p>Tuổi: {data.age}</p>
                        {
                            data.socials.map((social,index) =>
                                <p key={index}>{social.facebook}</p>
                            )
                        }
                    </div>
                )
            }
            <h1>Array</h1>
            {
                array.map((number,index)=>
                    <h3 key={index}>{` ${index+1}. ${number}`}</h3>
                )
            }
        </>
    );
}

export default ObjAndArray;