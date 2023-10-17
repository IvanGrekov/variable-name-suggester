import { useEffect, MutableRefObject } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import { ITabProps } from 'components/tabs/types/tab';
import { TAB_PARAM_NAME } from 'constants/tabs.constants';
import { useTabsContext } from 'contexts/TabsContext';
import { useGetStringifiedSearchParams } from 'hooks/searchParams.hooks';
import { useCurrentTab } from 'hooks/tabs.hooks';

type TTabElementRef = MutableRefObject<HTMLDivElement | null>;

type TUseTabIndicatorConnectionProps = Pick<
    ITabProps,
    'value' | 'customCurrentTab'
> & {
    tabElementRef: TTabElementRef;
};

type TUseTabIndicatorConnection = (
    props: TUseTabIndicatorConnectionProps,
) => void;

export const useTabIndicatorConnection: TUseTabIndicatorConnection = ({
    tabElementRef,
    value,
    customCurrentTab,
}) => {
    const tabsContext = useTabsContext();
    const currentTab = useCurrentTab();

    const activeTab = customCurrentTab ?? currentTab;

    useEffect(() => {
        const { indicatorElement, initialIndicatorLeftPosition } = tabsContext;
        const tabElementRect = tabElementRef.current?.getBoundingClientRect();

        if (
            !indicatorElement ||
            !initialIndicatorLeftPosition ||
            !tabElementRect
        ) {
            return;
        }

        if (value === activeTab) {
            const newLeftPosition =
                tabElementRect.left - initialIndicatorLeftPosition;
            indicatorElement.style.left = `${newLeftPosition}px`;
        }
    }, [tabsContext, tabElementRef, value, activeTab]);
};

type TUseTabClickListener = (path: ITabProps['value']) => VoidFunction;

export const useTabClickListener: TUseTabClickListener = (path) => {
    const router = useRouter();
    const pathname = usePathname();
    const getStringifiedSearchParams = useGetStringifiedSearchParams();

    return () => {
        const params = getStringifiedSearchParams(TAB_PARAM_NAME, path);
        router.push(`${pathname}${params}`);
    };
};
