import { useEffect, useState } from 'react';
import Company from '../Company';

import { connect } from 'react-redux';
import authActions from '../../redux/auth/actions';
// import companiesActions from '../../redux/companies/actions';
import { companiesLib } from '../../lib/companies'; 

import './index.css';
import { Companies } from '../../interfaces/companies';
import { CompanyData } from '../../interfaces/companyData';

function TopProjects(props: any) {
    const {
        auth,
        loadAuthStorage,
    } = props
    
    const [listOfCompanies, setListOfCompanies] = useState<CompanyData[]>([]);
    const [loaded, setLoaded] = useState(false);

    const { getCompanies } = companiesLib();

    async function loadCompanies() {
        const {data: {data: topProjects}} = await getCompanies(auth.token);
        console.log('top-projects', topProjects);
        setListOfCompanies(topProjects);
    }

    useEffect(() => {
        loadAuthStorage();
        loadCompanies();
    }, [])

    useEffect(() => {
        if (listOfCompanies.length > 0) {
            setLoaded(true);
            console.log(loaded)
        }
    }, [listOfCompanies])

    return (
        <div className='top-projects'>
            <div className='sub-title'>TOP 3 PROJECTS</div>
            <div className='companies'>
                { loaded && listOfCompanies.length > 0 &&
                    listOfCompanies.map((companyData: CompanyData) => <Company data={companyData} key={companyData.id} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({
    auth,
  }: any) => ({
    auth,
  });
  
  export default connect(mapStateToProps, {
    ...authActions, 
  })(TopProjects);