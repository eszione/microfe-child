import {
    Icon,
    PrimaryButton,
    TextButton,
    SelectOptionProps,
} from 'cosmos-components';
import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { SearchableTagSelect } from 'modules/search';

import msg from 'modules/agents/agents/messages';

import { getProductRateOptions, getAllocatRateLoading } from '../selectors';

import { actions as ratesActions } from '../ducks/productRates';
import { allocateProductRate as allocateRateAction } from '../ducks/allocateProductRate';

type ActionType = 'Add' | 'Remove';

export const AllocateRateModalContent = ({ selectedAgents }) => {
    const [rateCode, setRateCode] = useState<SelectOptionProps>(null);
    const [succeedNotice, setSucceedNotice] = useState(null);
    const [allocateRateSucceed, setAllocateRateSucceed] = useState(false);

    const intl = useIntl();
    const dispatch = useDispatch();

    const { options: rateOptions, loading: rateLoading } = useSelector(
        getProductRateOptions,
    );

    const allocating = useSelector(getAllocatRateLoading);

    const searchForRates = (keyword = null) => {
        if (keyword) {
            dispatch(
                ratesActions.listRequest({
                    text: keyword,
                }),
            );
        }
    };

    const generateNotice = (action: ActionType) => {
        if (action === 'Add') {
            return intl.formatMessage(msg.editProductRates.addSucceed, {
                code: rateCode?.value,
            });
        }

        return intl.formatMessage(msg.editProductRates.removeSucceed, {
            code: rateCode?.value,
        });
    };

    const allocateProductRate = (action: ActionType) => {
        dispatch(
            allocateRateAction({
                group: {
                    code: rateCode?.value,
                },
                agents: selectedAgents.map((agent) => ({
                    id: agent.id,
                    code: agent.code,
                })),
                action,
                onSuccess: () => {
                    setAllocateRateSucceed(true);
                    setRateCode(null);
                    setSucceedNotice(generateNotice(action));
                },
            }),
        );
    };

    useEffect(() => {
        dispatch(ratesActions.clean());
    }, []);

    return (
        <>
            <SelectTitle>
                {intl.formatMessage(msg.editProductRates.code)}
            </SelectTitle>
            <SearchableTagSelect
                placeholder={intl.formatMessage(
                    msg.editProductRates.selectAProductRate,
                )}
                isLoading={rateLoading}
                isMulti={false}
                isClearable
                options={rateOptions}
                value={rateCode}
                onSearch={searchForRates}
                onChange={(selected) => {
                    setRateCode(selected);
                    setAllocateRateSucceed(false);
                    dispatch(ratesActions.clean());
                }}
                isDisabled={allocating}
            />
            {rateCode && (
                <ModalButtonWrapper>
                    <ModalTextButton
                        size="small"
                        onClick={() => allocateProductRate('Remove')}
                        isLoading={allocating}
                    >
                        <Icon name="removeCircle" isInverted />
                        {intl.formatMessage(msg.editProductRates.remove)}
                    </ModalTextButton>
                    <ModalPrimaryButton
                        size="small"
                        onClick={() => allocateProductRate('Add')}
                        isLoading={allocating}
                    >
                        <Icon name="addCircle" isInverted />
                        {intl.formatMessage(msg.editProductRates.add)}
                    </ModalPrimaryButton>
                </ModalButtonWrapper>
            )}
            {allocateRateSucceed && (
                <AllocateRateSucceed>
                    <Icon name="checkCircle" isInverted />
                    {succeedNotice}
                </AllocateRateSucceed>
            )}
        </>
    );
};

const SelectTitle = styled.div`
    color: ${({ theme: { colors } }) => colors.battleshipGrey};
    margin-bottom: 0.5rem;
`;

const ModalButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.5rem;
`;

const buttonStyle = css`
    width: 8rem;
    height: 3.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    svg {
        width: 2rem;
        margin-right: 0.5rem;
    }
`;

const ModalPrimaryButton = styled(PrimaryButton)`
    ${buttonStyle}
`;

const ModalTextButton = styled(TextButton)`
    ${buttonStyle}

    margin-right: 1.5rem;

    svg {
        fill: ${({ theme: { colors } }) => colors.blueMain};
    }
`;

const AllocateRateSucceed = styled.div`
    margin-top: 1.5rem;
    background-color: #eaf5fd;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    padding-left: 5px;

    svg {
        fill: ${({ theme: { colors } }) => colors.green};
        width: 1.5rem;
        margin-right: 1rem;
    }
`;
