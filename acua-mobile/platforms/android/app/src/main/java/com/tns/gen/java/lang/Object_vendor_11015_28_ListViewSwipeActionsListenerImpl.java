/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_11015_28_ListViewSwipeActionsListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsListener {
  public Object_vendor_11015_28_ListViewSwipeActionsListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onSwipeStarted(
      com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onSwipeStarted", void.class, args);
  }

  public void onSwipeProgressChanged(
      com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onSwipeProgressChanged", void.class, args);
  }

  public void onSwipeEnded(com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onSwipeEnded", void.class, args);
  }

  public void onExecuteFinished(
      com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onExecuteFinished", void.class, args);
  }

  public void onSwipeStateChanged(
      com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState param_0,
      com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onSwipeStateChanged", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
