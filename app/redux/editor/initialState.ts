export type TooltipShow = '' | 'File' | 'Edit' | 'Format' | 'View' | 'Help';

export const initialState: {
  tooltipShow: { value: TooltipShow; show: boolean };
  textFiles: {
    id: string;
    name: string;
    content: string;
    wrap: boolean;
    fontOptions: { fontFamily: string; fontSize: number; fontStyle: string };
  }[];
} = {
  tooltipShow: { show: false, value: '' },
  textFiles: [
    {
      id: 'text123',
      content:
        'njkewnlkhxnakscnlklushbkcbsludhxkybubaliuhkxjeknyavucyhulxnmeuaebgjvkjcLHUEXKYBBAKXUEHKB',
      name: 'New text document file',
      wrap: false,
      fontOptions: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontStyle: 'Normal',
      },
    },
    {
      id: 'text1234',
      content:
        'This is a new text document file. You can write anything you want here.',
      name: 'New text document file 2',
      wrap: false,
      fontOptions: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontStyle: 'Normal',
      },
    },
  ],
};
