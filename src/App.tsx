import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import RemainingAmount from './RemainingAmount'

const App = () => {
    return (
        <>
            <Container>
                <Typography variant="h3" component="h1">
                    Create a budget
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={4}>
                        <TextField label="Monthly Income" variant="outlined" />
                    </Grid>
                    <Grid size={4}>
                        <Button
                            size="large"
                            sx={{ ':hover': 'reset', cursor: 'default' }}
                            color="error"
                            component="p"
                            disableRipple
                            variant="contained"
                            disableFocusRipple
                            disableElevation
                        >
                            Remaining: {10000}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default App
