import { FC, useEffect, useState } from 'react'; 
import {
    Outlet
} from "react-router-dom";
import ClientService from '../service';
import DataTable from 'react-data-table-component';

import { useAppDispatch, useAppSelector } from '../../../Hooks/customSelector'; 
import { RootState } from '../../../Redux/store';

//Moment react
import Moment from 'react-moment';

const Order: FC = () => {  

    const user = useAppSelector((state: RootState) => state.users.user );

    const clientService = new ClientService();
    let [ loading, setLoading ] = useState(false);
    let [ orders, setOrders ] = useState([]);


    const columns = [
        {
            name: 'Date',
            selector: (row: any) => <Moment format="YYYY/MM/DD hh:mm:ss">
                                        {row.addDate}
                                    </Moment>,
        },
        {
            name: 'Statut',
            selector: (row: any) => row.orderStatut === null ? 'Commande en cours de validation' : '',
        },
        {
            name: 'Méthode de paiement',
            selector: (row: any) => row.paymenentMethod.libelle,
        },
        {
            name: 'Méthode de livraison',
            selector: (row: any) => row.shippingService.libSpService,
        },
      
        {
            name: 'Options' ,
            selector: (row: any) => (
                <div className='btn-list'>
                    <button type="button" onClick={event => {
                       //  navigate('/product/edit/'+row.id.toString());
                     }}
                        className="btn waves-effect waves-light btn-success"> 
                              Détails
                    </button>
                    {/* <button type="button" onClick={event => {  }}
                        className="btn waves-effect waves-light btn-danger"> 
                                <span className="" style={{ fontSize: "1em" }} >
                                <i className="icon-trash"></i></span>
                             
                    </button> */}
                </div>
            )
        } 
    ];

    const getOrders = () => {

        clientService.getOrders(Number(user.id)).then(async function (response: any) {
            console.log(response);  
            setOrders(response.data?.data); 
        })
        .catch(function (error: any) {
            console.log(error); 
        });

    } 

    useEffect(() => {
        getOrders();
    }, []);
   
    
    return (
        <> 
         {
            orders.length === 0 ? 
            <p>
                <strong>
                    No order for the moment
                </strong>
            </p> :
            <>

                    <br />
                                    
                                    <div className="table-responsive">
                                        <DataTable
                                            responsive={true}
                                            className="table table-striped table-bordered"
                                            columns={columns}
                                            data={orders}
                                            progressPending={loading}
                                            pagination
                                        />
                                    </div>

            </>

         }
           
        </>
    );
}

export default Order