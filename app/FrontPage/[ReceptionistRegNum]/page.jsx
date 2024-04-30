import Front_page from '../_components/Front_page';
export default function page({params}){
    // console.log(params?.ReceptionistRegNum)
    return(
        <>
        <Front_page ReceptionistRegNum={params?.ReceptionistRegNum}/>

        </>
    )
}