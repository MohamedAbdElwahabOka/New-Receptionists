import Front_page from '../_components/Front_page';
export default function page({params}){

    return(
        <>
        <Front_page ReceptionistRegNum={params?.ReceptionistRegNum}/>

        </>
    )
}