/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.telerik.widget.list;

public class ReorderWithHandlesBehavior_vendor_10251_26_ExtendedReorderWithHandlesBehavior
    extends com.telerik.widget.list.ReorderWithHandlesBehavior
    implements com.tns.NativeScriptHashCodeProvider {
  public ReorderWithHandlesBehavior_vendor_10251_26_ExtendedReorderWithHandlesBehavior(
      int param_0) {
    super(param_0);
    com.tns.Runtime.initInstance(this);
  }

  public android.view.View getReorderHandleOverride(android.view.ViewGroup param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (android.view.View)
        com.tns.Runtime.callJSMethod(
            this, "getReorderHandleOverride", android.view.View.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
