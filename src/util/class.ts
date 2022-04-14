export function className(args: (string | undefined | null | false)[]): string {
    return args.filter(x => x).join(' ');
}