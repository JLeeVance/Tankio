import { 
    Card,
    CardContent,
    CardActionArea,
    Button
} from '@mui/material'

function Tile({
    id,
    common_name,
    handleRemove,
    type
}){
    return (
        <Card raised='true' sx={{maxWidth:'90%', maxHeight:'50%', margin:'.5%'}}>
            <CardContent>
                {common_name}
                <Button onClick={() => handleRemove(id, type, common_name)}>Remove</Button>
            </CardContent>
        </Card>
    )
}
export default Tile