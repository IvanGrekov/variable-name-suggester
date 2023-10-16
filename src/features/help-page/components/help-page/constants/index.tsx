import ListItem from 'components/list/ListItem';
import OrderedList from 'components/list/OrderedList';
import Spacing from 'components/spacing/Spacing';
import Typography from 'components/typography/Typography';

export const FAQ = [
    {
        title: 'What is Variable Name Suggester?',
        content: (
            <Typography>
                Variable Name Suggester is a tool that helps you find
                appropriate variable names for your code by connecting to OpenAI
                API.
            </Typography>
        ),
    },
    {
        title: 'Who is this for?',
        content: (
            <Typography>
                This tool is designed for both novice and experienced developers
                who aim to write more readable and maintainable code.
            </Typography>
        ),
    },
    {
        title: 'How to Use?',
        content: (
            <>
                <OrderedList>
                    <ListItem value="Select at least one area from the dropdown field." />

                    <ListItem value="Once you've selected an area, a char will appear." />

                    <ListItem value="Type in a description or hint about the variable in the textarea of the chat." />

                    <ListItem value="Click on the submit button to get your variable name suggestions." />
                </OrderedList>
                <Spacing xs={8} />
            </>
        ),
    },
];
