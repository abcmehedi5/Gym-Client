import React, { useEffect, useState } from 'react';
import Head from '../Shared/Head';
import Footer from '../Home/Footer/Footer';
import './Classes.css'
import class1 from '../../Image/class1.png'
import class2 from '../../Image/class2.jpg'
import class3 from '../../Image/class3.jpg'
import class4 from '../../Image/class4.jpg'
import class5 from '../../Image/class5.jpg'
import class6 from '../../Image/class6.jpg'
import ClassDetails from './ClassDetails/ClassDetails';
import Loading from '../Loading/Loading';

// const classData = [
//     {
//         title: 'PYSCHO TRANING',
//         img: class1,
//         id: 472317221,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum laboriosam perferendis repellat reprehenderit doloremque eveniet beatae tempore voluptas adipisci architecto dicta aut sit? At ratione vitae enim. Modi fugiat soluta, sequi repellendus voluptatibus similique, maxime est omnis eligendi nemo reprehenderit odio. Quidem nobis, voluptate aut consequatur sequi iure eos ducimus cum, rem, maiores minus! Sequi vitae, optio numquam officia ipsum sapiente rem culpa repudiandae accusantium, quos beatae aliquid facere, suscipit consequuntur. Libero tempore id ad delectus, quia dolorum ab alias, sequi dignissimos quo laudantium adipisci nam est, consectetur a! Aut dolore distinctio illo ducimus nam quisquam in nemo laborum!',
//         classShedule: {
//             monday: '8:00 AM - 9:00 AM',
//             tuesday: '8:00 AM - 9:00 AM',
//             wednesday: '8:00 AM - 9:00 AM',
//             Thursday: '8:00 AM - 9:00 AM',
//             friday: '8:00 AM - 9:00 AM',
//             saturday: '8:00 AM - 9:00 AM'
//         }
//     },

//     {
//         title: 'SELF DEFENSE',
//         img: class2,
//         id: 437212722,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum laboriosam perferendis repellat reprehenderit doloremque eveniet beatae tempore voluptas adipisci architecto dicta aut sit? At ratione vitae enim. Modi fugiat soluta, sequi repellendus voluptatibus similique, maxime est omnis eligendi nemo reprehenderit odio. Quidem nobis, voluptate aut consequatur sequi iure eos ducimus cum, rem, maiores minus! Sequi vitae, optio numquam officia ipsum sapiente rem culpa repudiandae accusantium, quos beatae aliquid facere, suscipit consequuntur. Libero tempore id ad delectus, quia dolorum ab alias, sequi dignissimos quo laudantium adipisci nam est, consectetur a! Aut dolore distinctio illo ducimus nam quisquam in nemo laborum!',
//         classShedule: {
//             monday: '8:00 AM - 9:00 AM',
//             tuesday: '8:00 AM - 9:00 AM',
//             wednesday: '8:00 AM - 9:00 AM',
//             Thursday: '8:00 AM - 9:00 AM',
//             friday: '8:00 AM - 9:00 AM',
//             saturday: '8:00 AM - 9:00 AM'
//         }
//     },

//     {
//         title: 'ADVANCE GYM',
//         img: class3,
//         id: 437212723,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum laboriosam perferendis repellat reprehenderit doloremque eveniet beatae tempore voluptas adipisci architecto dicta aut sit? At ratione vitae enim. Modi fugiat soluta, sequi repellendus voluptatibus similique, maxime est omnis eligendi nemo reprehenderit odio. Quidem nobis, voluptate aut consequatur sequi iure eos ducimus cum, rem, maiores minus! Sequi vitae, optio numquam officia ipsum sapiente rem culpa repudiandae accusantium, quos beatae aliquid facere, suscipit consequuntur. Libero tempore id ad delectus, quia dolorum ab alias, sequi dignissimos quo laudantium adipisci nam est, consectetur a! Aut dolore distinctio illo ducimus nam quisquam in nemo laborum!',
//         classShedule: {
//             monday: '8:00 AM - 9:00 AM',
//             tuesday: '8:00 AM - 9:00 AM',
//             wednesday: '8:00 AM - 9:00 AM',
//             Thursday: '8:00 AM - 9:00 AM',
//             friday: '8:00 AM - 9:00 AM',
//             saturday: '8:00 AM - 9:00 AM'
//         }
//     },

//     {
//         title: 'CARDIO TRAINING',
//         img: class4,
//         id: 472312472,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum laboriosam perferendis repellat reprehenderit doloremque eveniet beatae tempore voluptas adipisci architecto dicta aut sit? At ratione vitae enim. Modi fugiat soluta, sequi repellendus voluptatibus similique, maxime est omnis eligendi nemo reprehenderit odio. Quidem nobis, voluptate aut consequatur sequi iure eos ducimus cum, rem, maiores minus! Sequi vitae, optio numquam officia ipsum sapiente rem culpa repudiandae accusantium, quos beatae aliquid facere, suscipit consequuntur. Libero tempore id ad delectus, quia dolorum ab alias, sequi dignissimos quo laudantium adipisci nam est, consectetur a! Aut dolore distinctio illo ducimus nam quisquam in nemo laborum!',
//         classShedule: {
//             monday: '8:00 AM - 9:00 AM',
//             tuesday: '8:00 AM - 9:00 AM',
//             wednesday: '8:00 AM - 9:00 AM',
//             Thursday: '8:00 AM - 9:00 AM',
//             friday: '8:00 AM - 9:00 AM',
//             saturday: '8:00 AM - 9:00 AM'
//         }
//     },

//     {
//         title: 'STRENGTH TRAINING',
//         img: class5,
//         id: 437212725,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum laboriosam perferendis repellat reprehenderit doloremque eveniet beatae tempore voluptas adipisci architecto dicta aut sit? At ratione vitae enim. Modi fugiat soluta, sequi repellendus voluptatibus similique, maxime est omnis eligendi nemo reprehenderit odio. Quidem nobis, voluptate aut consequatur sequi iure eos ducimus cum, rem, maiores minus! Sequi vitae, optio numquam officia ipsum sapiente rem culpa repudiandae accusantium, quos beatae aliquid facere, suscipit consequuntur. Libero tempore id ad delectus, quia dolorum ab alias, sequi dignissimos quo laudantium adipisci nam est, consectetur a! Aut dolore distinctio illo ducimus nam quisquam in nemo laborum!',
//         classShedule: {
//             monday: '8:00 AM - 9:00 AM',
//             tuesday: '8:00 AM - 9:00 AM',
//             wednesday: '8:00 AM - 9:00 AM',
//             Thursday: '8:00 AM - 9:00 AM',
//             friday: '8:00 AM - 9:00 AM',
//             saturday: '8:00 AM - 9:00 AM'
//         }
//     },

//     {
//         title: 'PSYCHO TRANING',
//         img: class6,
//         id: 472312726,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum laboriosam perferendis repellat reprehenderit doloremque eveniet beatae tempore voluptas adipisci architecto dicta aut sit? At ratione vitae enim. Modi fugiat soluta, sequi repellendus voluptatibus similique, maxime est omnis eligendi nemo reprehenderit odio. Quidem nobis, voluptate aut consequatur sequi iure eos ducimus cum, rem, maiores minus! Sequi vitae, optio numquam officia ipsum sapiente rem culpa repudiandae accusantium, quos beatae aliquid facere, suscipit consequuntur. Libero tempore id ad delectus, quia dolorum ab alias, sequi dignissimos quo laudantium adipisci nam est, consectetur a! Aut dolore distinctio illo ducimus nam quisquam in nemo laborum!',
//         classShedule: {
//             monday: '8:00 AM - 9:00 AM',
//             tuesday: '8:00 AM - 9:00 AM',
//             wednesday: '8:00 AM - 9:00 AM',
//             Thursday: '8:00 AM - 9:00 AM',
//             friday: '8:00 AM - 9:00 AM',
//             saturday: '8:00 AM - 9:00 AM'
//         }
//     },
// ]

const Classes = () => {
    const [classData, setClassData] = useState([])
    // loading state
    console.log(classData.length);
    const [loading, setLoading] = useState({
        noData: false,
        loadingSpin: true
    })

    // get all class data display
    useEffect(() => {
        fetch('http://localhost:5000/dashboard/classget')
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [])



    // loading time out
    setTimeout(() => {
        const newLoading = { ...loading }
        newLoading.loadingSpin = false
        newLoading.noData = true
        setLoading(newLoading)
    }, 5000)
    return (
        <div>
            <div className='classHead'>
                <Head />
                <h1 className='title myFont position-absolute top-50 start-50 translate-middle'>OUR CLASSES</h1>
            </div>

            <div className='container  mb-5'>
                <div className="row">
                    {
                        classData.length <= 0 ? loading.loadingSpin && <Loading /> || loading.noData && <h2 className='text-center mt-5'>No data fetch</h2> :
                            classData.map(classdata => <ClassDetails classdata={classdata} key={classdata}></ClassDetails>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Classes;