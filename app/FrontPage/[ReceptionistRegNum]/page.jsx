"use client"
import Front_page from '../_components/Front_page';
import withAuth from '../../_Utils/withAuth';
function page({params}){

    return(
        <>
        <Front_page ReceptionistRegNum={params?.ReceptionistRegNum}/>

        </>
    )
}
export default withAuth(page)