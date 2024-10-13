export type TooltipShow = '' | 'File' | 'Edit' | 'Format' | 'View' | 'Help';

export type TextFile = {
  contentID: string;
  content: string;
  wrap: boolean;
  fontOptions: { fontFamily: string; fontSize: number; fontStyle: string };
  tooltipShow: { value: TooltipShow; show: boolean };
  dateModified: Date;
};

export const initialState: {
  textFiles: TextFile[];
} = {
  textFiles: [
    {
      contentID: 'text123',
      content:
        'njkewnlkhxnakscnlklushbkcbsludhxkybubaliuhkxjeknyavucyhulxnmeuaebgjvkjcLHUEXKYBBAKXUEHKB',

      wrap: false,
      fontOptions: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontStyle: 'Normal',
      },
      tooltipShow: { value: '', show: false },
      dateModified: new Date(),
    },
  ],
};
