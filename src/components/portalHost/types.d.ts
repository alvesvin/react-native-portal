export interface PortalHostProps {
  /**
   * Host's key or name to be used as an identifier.
   * @type string
   */
  name: string;

  /**
   * Render only the last portaled element
   * @type boolean
   */
  lastOnly?: boolean;
}
