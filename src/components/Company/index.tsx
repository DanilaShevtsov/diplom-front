import { CompanyData } from '../../interfaces/companyData';
import './index.css';

interface CompanyProps {
    data: CompanyData
}


export default function Company({data}: CompanyProps) {
    console.log('company', data);
    return (
        <div className="company">
            <div className='company-image'>Image</div>
            <div className='company-info'>
                <span>{data.name}</span>
                <span>{data.description}</span>
                <span>{data.balance}</span>
                <span>{data.goal}</span>
                <span>{data.owner.pubKey}</span>
            </div>
        </div>
    );
}