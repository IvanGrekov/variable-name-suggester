import Accordion from 'components/accordion/Accordion';
import { FAQ } from 'features/help-page/components/help-page/constants';

interface IHelpPageProps {
    className?: string;
}

export default function HelpPage({ className }: IHelpPageProps): JSX.Element {
    return (
        <section className={className}>
            {FAQ.map(({ title, content }) => (
                <Accordion key={title} title={title} titleVariant="subtitle2">
                    {content}
                </Accordion>
            ))}
        </section>
    );
}
