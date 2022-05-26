import {theme} from '@theme';
import _ from 'lodash';
import React from 'react';
import {ListRenderItem, StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

interface IListProps {
  data: any[] | undefined;
  renderItem: ListRenderItem<any>;
  headerStyle?: StyleProp<ViewStyle>;
  columns?: number;
  handlePage?: () => void;
  setPage?: (page: number) => void;
  header?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null;
}

export const List: React.FC<IListProps> = props => {
  return (
    <StyledList
      keyExtractor={() => _.uniqueId('item_')}
      onEndReached={props.handlePage}
      onEndReachedThreshold={0.2}
      data={props.data ?? []}
      ListHeaderComponent={props.header}
      renderItem={props.renderItem}
      style={{
        backgroundColor: theme.colors.basic.light_gray,
      }}
      contentContainerStyle={{
        paddingBottom: 100,
        backgroundColor: theme.colors.basic.white,
      }}
      numColumns={props.columns ?? 2}
      columnWrapperStyle={
        props.columns != 1 && {
          paddingBottom: 7,
          paddingTop: 10,
          paddingLeft: 19,
        }
      }
    />
  );
};

const StyledList = styled.FlatList`
  height: 100%;
  background-color: ${props => props.theme.colors.basic.white};
`;
