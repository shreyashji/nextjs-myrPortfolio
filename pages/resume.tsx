import { languages, tools } from "../data"
import Bar from '../components/Bar'
import {motion} from "framer-motion"
import {fadeInUp, routeAnimation} from "../animations"
import Head  from "next/head";
const resume = () => {
    return (
        <motion.div className="px-6 py-2"
         variants={routeAnimation} 
         initial="initial" 
         animate="animate"
         exit="exit"
         >
         <Head>
        <title>Softare Engineer |  Resume | Shreyash Choudhary</title>
        </Head>
           {/* //! Education & Experience */}
           <div className='grid gap-6 md:grid-cols-2'>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
               <h5 className='my-3 text-2xl font-bold'>Education</h5>
               <div>
                  <h5 className='my-2 text-xl font-bold'>
                     Computer Science Engineering
                  </h5>
                  <p className='font-semibold'>
                     SIRT-Indore (RGPV) (2016-2020)
                  </p>
                  <p className='my-3'>
                     I have done my B.E in Computer Science
                     Engineering from Sagar Institute of Research & Technology,Indore (RGPV)
                  </p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
               <h5 className='my-3 text-2xl font-bold'>Experience</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Software/Data Engineer
                  </h5>
                  <p className='font-semibold'>Tata Consultancy Services</p>
                  <p className='my-3'>I have architected /designed/devloped ETL pipelines to preocess, 
                  clean and ingest many megabytes/Lakhs(record) of semi 
                  structured data using Azure Data Factory.improved existing data flow 
                  processes for faster access of scalable data for client.</p>
               </div>
            </motion.div>
        </div>

            {/*Languages & Tools */}
        
            <div className='grid gap-6 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
               <div className='my-2 '>
                  {languages.map((language =><Bar data={language} key={language.name} />
                  ))}
               </div>
            </div>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
               <div className='my-2 '>
                  {tools.map((tool =><Bar data={tool} key={tool.name} />
                  ))}
               </div>
            </div>
            </div>
        </motion.div>
    )
}
export default resume 
