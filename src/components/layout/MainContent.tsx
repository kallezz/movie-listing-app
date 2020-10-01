import React, {FunctionComponent, ReactNode} from 'react';
import { Grid } from 'semantic-ui-react';

type MainContentProps = {
    children: ReactNode
}

const MainContent: FunctionComponent<MainContentProps> = ({children}) => {
    return (
        <Grid
            padded
            doubling
            columns={6}
        >
            {children}
        </Grid>
    );
};

export default MainContent;