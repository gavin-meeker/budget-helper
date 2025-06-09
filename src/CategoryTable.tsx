import {
    Paper,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from '@mui/material'
import TextField from '@mui/material/TextField'

const CategoryTable = () => {
    const categories = [
        { name: 'Electricity', amount: 10000 },
        { name: 'Utilities', amount: 10000 },
    ]
    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Category Name</TableCell>{' '}
                            <TableCell>Amount</TableCell>{' '}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category) => (
                            <>
                                <TableRow key={category.name}>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>
                                        <TextField
                                            value={category.amount}
                                        ></TextField>
                                    </TableCell>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CategoryTable
