import Accordion from 'components/accordion/Accordion';
import { FAQ } from 'components/help-page/constants';

export default function HelpPage(): JSX.Element {
    return (
        <>
            {FAQ.map(({ title, content }) => (
                <Accordion key={title} title={title} titleVariant="subtitle2">
                    {content}
                </Accordion>
            ))}
        </>
    );
}
