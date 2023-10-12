import { useEffect, MutableRefObject } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import { ITabProps } from 'components/tabs/types/tab';
import { TAB_PARAM_NAME } from 'constants/tabs.constants';
import { useTabsContext } from 'contexts/TabsContext';
import { useGetStringifiedSearchParams } from 'hooks/searchParams.hooks';
import { useCurrentTab } from 'hooks/tabs.hooks';

type TTabElementRef = MutableRefObject<HTMLDivElement | null>;

type TUseTabIndicatorConnectionProps = Pick<ITabProps, 'path'> & {
    tabElementRef: TTabElementRef;
};

type TUseTabIndicatorConnection = (
    props: TUseTabIndicatorConnectionProps,
) => void;

export const useTabIndicatorConnection: TUseTabIndicatorConnection = ({
    tabElementRef,
    path,
}) => {
    const tabsContext = useTabsContext();
    const currentTab = useCurrentTab();

    useEffect(() => {
        const { indicatorElement, initialIndicatorLeftPosition } =
            tabsContext || {};
        const tabElementRect = tabElementRef.current?.getBoundingClientRect();

        if (
            !indicatorElement ||
            !initialIndicatorLeftPosition ||
            !tabElementRect
        ) {
            return;
        }

        if (path === currentTab) {
            const newLeftPosition =
                tabElementRect.left - initialIndicatorLeftPosition;
            indicatorElement.style.left = `${newLeftPosition}px`;
        }
    }, [tabsContext, tabElementRef, path, currentTab]);
};

type TUseTabListenerProps = Pick<ITabProps, 'path'> & {
    tabElementRef: TTabElementRef;
};
type TUseTabListener = (props: TUseTabListenerProps) => void;

export const useTabListener: TUseTabListener = ({ tabElementRef, path }) => {
    const router = useRouter();
    const pathname = usePathname();
    const getStringifiedSearchParams = useGetStringifiedSearchParams();

    useEffect(() => {
        const tabElement = tabElementRef.current;

        if (!tabElement) {
            return;
        }

        const clickHandler = (): void => {
            const params = getStringifiedSearchParams(TAB_PARAM_NAME, path);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            router.push(`${pathname}${params}`, undefined, {
                shallow: true,
            });
        };

        tabElement.addEventListener('click', clickHandler);

        return (): void => {
            tabElement.removeEventListener('click', clickHandler);
        };
    }, [tabElementRef, pathname, path, router, getStringifiedSearchParams]);
};
