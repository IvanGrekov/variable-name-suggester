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
                <Typography>To get started, follow these steps:</Typography>
                <ol>
                    <li>
                        <Typography>
                            Select an area from the dropdown field.
                        </Typography>
                    </li>

                    <li>
                        <Typography>
                            Once you've selected an area, a textarea field will
                            appear.
                        </Typography>
                    </li>

                    <li>
                        <Typography>
                            Type in a description or hint about the variable in
                            the textarea.
                        </Typography>
                    </li>

                    <li>
                        <Typography>
                            Click on the 'Suggest' button to get your variable
                            name suggestions.
                        </Typography>
                    </li>
                </ol>
            </>
        ),
    },
];
