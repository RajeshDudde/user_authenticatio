import axios from 'axios'

const baseurl='http://localhost:4000/'
 
export default 
{
    postMessage(url=baseurl+'stu/'){
        return {
            fetchAll:()=>axios.get(url),
            fetchById: id=> axios.get(url+id),
            create:newrecord=>axios.post(url,newrecord),
            update:(id,updatedrecord)=>axios.put(url+id,updatedrecord),
            delete:id=>axios.delete(url+id)
        }
    }
}