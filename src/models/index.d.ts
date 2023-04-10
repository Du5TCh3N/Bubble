import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBubble = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bubble, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly img: string;
  readonly imgs: (string | null)[];
  readonly description: string;
  readonly space: string;
  readonly tags: (string | null)[];
  readonly start_date: string;
  readonly end_date: string;
  readonly creator_name: string;
  readonly creator_location: string;
  readonly members: (string | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBubble = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bubble, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly img: string;
  readonly imgs: (string | null)[];
  readonly description: string;
  readonly space: string;
  readonly tags: (string | null)[];
  readonly start_date: string;
  readonly end_date: string;
  readonly creator_name: string;
  readonly creator_location: string;
  readonly members: (string | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bubble = LazyLoading extends LazyLoadingDisabled ? EagerBubble : LazyBubble

export declare const Bubble: (new (init: ModelInit<Bubble>) => Bubble) & {
  copyOf(source: Bubble, mutator: (draft: MutableModel<Bubble>) => MutableModel<Bubble> | void): Bubble;
}